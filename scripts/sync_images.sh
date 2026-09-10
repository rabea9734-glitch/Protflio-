#!/bin/bash
# Sync script to automatically copy uploaded dashboard images to their proper project destinations

sync_file() {
  local pattern="$1"
  local target_base="$2"
  
  # Find file matching pattern in workspace root or subdirectories (excluding public/dist/node_modules)
  local found=$(find . -maxdepth 2 -type f \( -name "*$pattern*" \) ! -path "*/public/*" ! -path "*/dist/*" ! -path "*/node_modules/*" 2>/dev/null | head -n 1)
  
  if [ -n "$found" ] && [ -f "$found" ]; then
    echo "Found matching image for $target_base: $found"
    cp -v "$found" "public/images/${target_base}.png"
    cp -v "$found" "public/images/${target_base}.jpg"
    mkdir -p dist/images
    cp -v "$found" "dist/images/${target_base}.png"
    cp -v "$found" "dist/images/${target_base}.jpg"
  fi
}

# Project 1: SaaS Sales & Profitability (BI-01)
sync_file "SaaS" "powerbi_saas_sales_dashboard"
sync_file "SaaS" "project-powerbi-01"
sync_file "Executive" "powerbi_saas_sales_dashboard"
sync_file "Executive" "project-powerbi-01"
sync_file "profitability" "powerbi_saas_sales_dashboard"
sync_file "profitability" "project-powerbi-01"

# Project 2: E-Commerce SQL Case Study (BI-02)
sync_file "Commerce" "powerbi_ecommerce_sql_dashboard"
sync_file "Commerce" "project-powerbi-02"
sync_file "Case" "powerbi_ecommerce_sql_dashboard"
sync_file "Case" "project-powerbi-02"
sync_file "SQL" "powerbi_ecommerce_sql_dashboard"
sync_file "SQL" "project-powerbi-02"

# Project 3: Digital Marketing (BI-03)
sync_file "marketing" "powerbi_digital_marketing_dashboard"
sync_file "marketing" "project-powerbi-03"
sync_file "Digital" "powerbi_digital_marketing_dashboard"
sync_file "Digital" "project-powerbi-03"

# Profile / Personal Photo
for term in "farahat" "Farahat" "profile" "Profile" "avatar" "personal" "Personal"; do
  found_prof=$(find . -maxdepth 2 -type f \( -iname "*$term*" \) ! -path "*/public/*" ! -path "*/dist/*" ! -path "*/node_modules/*" 2>/dev/null | head -n 1)
  if [ -n "$found_prof" ] && [ -f "$found_prof" ]; then
    echo "Found matching profile photo: $found_prof"
    cp -v "$found_prof" "public/farahat.jpg"
    cp -v "$found_prof" "public/farahat.png"
    cp -v "$found_prof" "public/images/farahat_profile.jpg"
    cp -v "$found_prof" "public/images/farahat_profile.png"
    mkdir -p dist/images
    cp -v "$found_prof" "dist/farahat.jpg"
    cp -v "$found_prof" "dist/farahat.png"
    cp -v "$found_prof" "dist/images/farahat_profile.jpg"
    cp -v "$found_prof" "dist/images/farahat_profile.png"
    break
  fi
done

echo "Sync completed."
