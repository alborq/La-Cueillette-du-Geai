.DEFAULT_GOAL := help

PORT ?= 8000
SITE_DIR := site
SCREENSHOT_DIR := screenshots

.PHONY: help serve check test screenshot-mobile screenshot-desktop screenshots clean

help: ## Afficher l'aide et les cibles disponibles
	@printf "\nLa Cueillette du Geai\n\n"
	@printf "Usage:\n"
	@printf "  make <target> [PORT=8000]\n\n"
	@printf "Targets:\n"
	@awk 'BEGIN {FS = ": .*## "}; /^[a-zA-Z_-]+: .*## / {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@printf "\n"

serve: check ## Lancer un serveur local sur http://localhost:$(PORT)
	@cd $(SITE_DIR) && python3 -m http.server $(PORT)

check: ## Verifier les fichiers attendus pour le site statique
	@test -f $(SITE_DIR)/index.html || (echo "Missing $(SITE_DIR)/index.html" && exit 1)
	@test -f $(SITE_DIR)/style.css || (echo "Missing $(SITE_DIR)/style.css" && exit 1)
	@test -d $(SITE_DIR)/images || (echo "Missing $(SITE_DIR)/images" && exit 1)
	@test -f scripts/screenshot.js || (echo "Missing scripts/screenshot.js" && exit 1)
	@test -f tests/layout.test.js || (echo "Missing tests/layout.test.js" && exit 1)
	@echo "Static site looks ready."

test: check ## Executer les tests de layout
	@node tests/layout.test.js

screenshot-mobile: check ## Generer une capture mobile dans screenshots/mobile.png
	@mkdir -p $(SCREENSHOT_DIR)
	@node scripts/screenshot.js mobile $(SCREENSHOT_DIR)/mobile.png

screenshot-desktop: check ## Generer une capture desktop dans screenshots/desktop.png
	@mkdir -p $(SCREENSHOT_DIR)
	@node scripts/screenshot.js desktop $(SCREENSHOT_DIR)/desktop.png

screenshots: screenshot-mobile screenshot-desktop ## Generer les captures mobile et desktop

clean: ## Nettoyer les fichiers generes localement
	@find . -type d -name '__pycache__' -prune -exec rm -rf {} +
	@rm -rf $(SCREENSHOT_DIR)
