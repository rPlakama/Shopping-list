{
  description = "NestJS Development Environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = import nixpkgs { inherit system; };
    in
    {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_20
          nodePackages.npm
          nodePackages."@nestjs/cli"
          typescript-language-server
          vscode-langservers-extracted
          typescript
        ];

        shellHook = ''
          echo "Node: $(node -v)"
          echo "Nest: $(nest -v)"
        '';
      };
    };
}
