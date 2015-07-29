#!/bin/sh


# This is a proof-of-concept sketch in Bash. I want to port this over to Node.

cd ./\!SVG/

for file in ./*.svg

do

  if [ -f "$file" ]; then

    name=$( echo $file | grep -o '[^\.\/].\+[^\.svg]' )

    convert -density 4000 \
            -background transparent \
            "$file" \
            -resize 450x450 \
            ../\!PNG/"${name}.png"

  fi

done
