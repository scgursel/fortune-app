#!/bin/bash

# Renk kodları
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Branch adını al
current_branch=$(git branch --show-current)

# Commit mesajını kontrol et (parametre olarak veya varsayılan)
commit_message=${1:-"Auto commit $(date +"%Y-%m-%d %H:%M:%S")"}

echo -e "${YELLOW}Mevcut branch: $current_branch${NC}"

# Değişiklikleri kontrol et
if [[ $(git status --porcelain) ]]; then
    echo -e "${YELLOW}Yerel değişiklikler bulundu. Commit işlemi başlatılıyor...${NC}"
    
    # Değişiklikleri staged'e ekle
    git add .
    
    # Commit at
    echo -e "${YELLOW}Commit mesajı: $commit_message${NC}"
    git commit -m "$commit_message"
    
    # Push işlemi
    echo -e "${YELLOW}Değişiklikler push ediliyor...${NC}"
    git push origin $current_branch
else
    echo -e "${GREEN}Yerel değişiklik bulunmadı.${NC}"
fi

# Pull işlemi
echo -e "${YELLOW}Uzak depodaki değişiklikler çekiliyor...${NC}"
git pull origin $current_branch

echo -e "${GREEN}İşlem tamamlandı!${NC}"

# Son durumu göster
echo -e "${YELLOW}\nGüncel durum:${NC}"
git status 