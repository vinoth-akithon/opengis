import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-brand-50:#f7fee7;
        --color-brand-100:#ecfccb;
        --color-brand-200: #d9f99d;
        --color-brand-300: #bef264;
        --color-brand-400: #a3e635;
        --color-brand-500: #84cc16;
        --color-brand-600: #65a30d;
        --color-brand-700: #4d7c0f;
        --color-brand-800: #3f6212;
        --color-brand-900: #365314;
        --color-brand-950: #1a2e05;


        --color-grey-50: #f9fafb;
        --color-grey-100: #f3f4f6;
        --color-grey-200: #e5e7eb;
        --color-grey-300: #d1d5db;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-grey-800: #1f2937;
        --color-grey-900: #111827;
        --color-grey-950: #030712;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: Helvetica, sans-serif;
        /* background-color: var(--color-grey-200); */
        background-color: var(--color-brand-50);
        height: 200vh;


    }



`;
export default GlobalStyles;
