import js from '@eslint/js';

export default [
    js.configs.recommended,

    {
        rules: {
            'no-undef': 0,
            'no-unused-vars': 0,
            '@typescript-eslint/no-explicit-any': 0,
        },
    },
];
