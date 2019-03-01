aws s3 rm "s3://andrewtatham.com/" --recursive
aws s3 cp "public" "s3://andrewtatham.com/" --recursive --include "*" --acl public-read