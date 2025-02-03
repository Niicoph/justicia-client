/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
        boxShadow : {
            'card-sha' : "0px 0px 100px -34px #2316FF;",
        },
        blur : {
            '5xl': '200px',
        },
        screens: {
            'xss' : '300px',
        },
        keyframes: {
            mercury: {
              '0%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
              '25%': { transform: 'translateY(-20px) translateX(10px) scale(1.05)' },
              '50%': { transform: 'translateY(40px) translateX(-10px) scale(0.95)' },
              '75%': { transform: 'translateY(-10px) translateX(50px) scale(1.02)' },
              '100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
            },
          },
          animation: {
            mercury: 'mercury 5s infinite ease-in-out',
          },

  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        fontSize: {
            'hero-h1' : '2.3em',
            'main-h2' : '1.8em',
        },
        backgroundImage: {
            'hero' : 'linear-gradient(360deg, #060A15 0% , #060A15 100%)',
            'heroFooter' : 'linear-gradient(180deg, #060A15 0% , #1F188C 32% , #4F46E5 100%)',
            'blur-gradient' :  'linear-gradient(360deg, #4F46E5 0% , #2316FF 100%)',
            'blur-1' : 'linear-gradient(360deg, #2316FF 0% , #2316FF 100%)',
            'blur-2' : 'linear-gradient(360deg, #36147A 0% , #421786 100%)',
            'JGradient': 'linear-gradient(90deg, #4F46E5 0%, #2316FF 100%)',
        },
  		colors: {
            cardT : '#0C0F19',
            Background: "#060A15",
            grayDark: '#0E0F12',
            Main: '#4F46E5' ,
            MainDark: '#2316FF',
            cardBG: '#1F188C',
            Bgray: '#E2E2E2',

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
