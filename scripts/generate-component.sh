#!/bin/bash

# 询问用户输入组件名
read -p "请输入组件名（至少由两个单词组成，横线连接，如: app-button): " component_name

# 检查组件名是否合法
if [[ ! $component_name =~ ^[a-zA-Z0-9]+-[a-zA-Z0-9]+$ ]]; then
    echo "无效的组件名。它应该符合格式: <word>-<word>"
    exit 1
fi

# 设置路径
template_path="src/components/template/base"
destination_path="src/components/$component_name"

# 检查目标路径是否存在
if [ -e "$destination_path" ]; then
    echo "目标路径已存在。中止操作。"
    exit 1
fi

# 拷贝模板
cp -r "$template_path" "$destination_path"

# 进入目标路径
cd "$destination_path" || exit 1

# 获取大驼峰形式的组件名
camel_case_name=$(echo "$component_name" | sed -r 's/(^|-)([a-zA-Z0-9])/\U\2/g')

# 重命名文件
for file in *; do
    if [ -f "$file" ]; then
        new_name=$(echo "$file" | sed "s/^[^\.]*/$camel_case_name/")
        mv "$file" "$new_name"
        echo "文件已重命名: $file -> $new_name"
    fi
done

# 编辑文件，将BaseTemplate替换为<camel_case_name>
for file in *; do
    if [ -f "$file" ]; then
        sed -i "s/BaseTemplate/$camel_case_name/g" "$file"
        echo "文件已编辑: $file"
    fi
done

echo "操作完成。"
