#!/bin/sh
set -eu

source_root=$(CDPATH= cd -- "$(dirname -- "$0")/../codex/skills" && pwd)
codex_home=${CODEX_HOME:-"$HOME/.codex"}
install_root="$codex_home/skills"
mkdir -p "$install_root"

for source_skill in "$source_root"/*; do
	[ -d "$source_skill" ] || continue
	skill_name=${source_skill##*/}
	installed_skill="$install_root/$skill_name"
	if [ -L "$installed_skill" ]; then
		current_target=$(readlink "$installed_skill")
		if [ "$current_target" = "$source_skill" ]; then
			rm "$installed_skill"
		else
			printf 'Refusing to replace existing skill link: %s\n' "$installed_skill" >&2
			exit 1
		fi
	fi
	if [ -e "$installed_skill" ]; then
		if [ -d "$installed_skill" ] && diff -qr "$source_skill" "$installed_skill" >/dev/null; then
			continue
		fi
		printf 'Refusing to replace existing skill: %s\n' "$installed_skill" >&2
		exit 1
	fi
	cp -R "$source_skill" "$installed_skill"
done

printf 'pstack Codex skills are installed in %s\n' "$install_root"
