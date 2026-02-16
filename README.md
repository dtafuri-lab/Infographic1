# Bean Scores - Arabica Coffee Quality Visualization

An interactive data visualization showing which countries grow the best Arabica coffee, based on cupping scores from certified Q graders.

## 🔗 [View Live Demo](https://dtafuri-lab.github.io/Test1/)

## About the Data

- **Source**: Coffee Quality Institute (CQI), January 2018
- **Sample Size**: 1,311 coffees evaluated
- **Scoring**: Professional cupping scores (0-100 points, 80+ = specialty grade)
- **Dataset Average**: 82.1 points across all origins

## Features

- **Swiss Design Aesthetic**: Clean, minimal typography with cooler brown/taupe color palette
- **Interactive Visualization**: Built with p5.js for smooth rendering
- **Responsive Layout**: Adapts to different screen sizes
- **Top 10 Origins**: Shows countries with highest average cupping scores
- **Sample Context**: Displays number of coffees evaluated per origin

## Top Performers

1. **United States** (85.98 pts) - 8 samples
2. **Papua New Guinea** (85.75 pts) - 1 sample  
3. **Ethiopia** (85.48 pts) - 44 samples
4. **Japan** (84.67 pts) - 1 sample
5. **Kenya** (84.31 pts) - 25 samples

## Technical Stack

- **p5.js** - Creative coding library for visualization
- **Google Fonts** - Space Grotesk typography
- **Vanilla JavaScript** - No frameworks, pure web standards
- **GitHub Pages** - Static hosting

## Local Development

```bash
# Clone the repository
git clone https://github.com/dtafuri-lab/Test1.git
cd Test1

# Serve locally (Python 3)
python3 -m http.server 8000

# Or use the included launcher
./Open\ Visualization.command
```

Open `http://localhost:8000` in your browser.

## About Coffee Scoring

Coffee cupping scores reflect multiple sensory attributes:
- **Aroma, Flavor, Aftertaste**: Sensory qualities
- **Acidity, Body, Balance**: Structural elements  
- **Uniformity, Clean Cup**: Consistency measures
- **Sweetness**: Natural sugar presence
- **Overall**: Cupper's holistic assessment

Scores of 80+ indicate "specialty grade" coffee, representing the top tier of quality in the global coffee market.

---

*Data visualization by [Diego Tafuri](https://github.com/dtafuri-lab) • Built with p5.js*