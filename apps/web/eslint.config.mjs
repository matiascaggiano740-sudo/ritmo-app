import globals from 'globals';
import tseslint from 'typescript-eslint';
export default tseslint.config(...tseslint.configs.recommended, { files: ['src/**/*.{ts,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } });
