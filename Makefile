.DEFAULT_GOAL := help

PORT ?= 8000
SITE_DIR := site

.PHONY: help serve check clean

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
	@echo "Static site looks ready."

clean: ## Nettoyer les fichiers Python generes localement
	@find . -type d -name '__pycache__' -prune -exec rm -rf {} +
