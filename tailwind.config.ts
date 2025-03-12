
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'pixel': ['"Press Start 2P"', 'cursive'],
				'pixel-mono': ['"VT323"', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				pixel: {
					black: '#000000',
					white: '#FFFFFF',
					gray: '#808080',
					'light-gray': '#C0C0C0',
					red: '#FF0000',
					'dark-red': '#800000',
					blue: '#0000FF',
					'light-blue': '#00FFFF',
					'dark-blue': '#000080',
					green: '#00FF00',
					'dark-green': '#008000',
					purple: '#8000FF',
					yellow: '#FFFF00',
					orange: '#FFA500',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				none: '0px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pixel-fade-in': {
					'0%': { opacity: '0' },
					'10%': { opacity: '0.1' },
					'20%': { opacity: '0.2' },
					'30%': { opacity: '0.3' },
					'40%': { opacity: '0.4' },
					'50%': { opacity: '0.5' },
					'60%': { opacity: '0.6' },
					'70%': { opacity: '0.7' },
					'80%': { opacity: '0.8' },
					'90%': { opacity: '0.9' },
					'100%': { opacity: '1' }
				},
				'pixel-blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'pixel-bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pixel-fade-in': 'pixel-fade-in 0.5s steps(10) forwards',
				'pixel-blink': 'pixel-blink 1s steps(2) infinite',
				'pixel-bounce': 'pixel-bounce 0.5s steps(2) infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
