// Bean Scores - Arabica Coffee Quality
// Swiss design - clean and minimal

// Embedded coffee data for GitHub Pages compatibility
const coffeeData = [
  {name: 'United States', score: 85.98, count: 8},
  {name: 'Papua New Guinea', score: 85.75, count: 1},
  {name: 'Ethiopia', score: 85.48, count: 44},
  {name: 'Japan', score: 84.67, count: 1},
  {name: 'Kenya', score: 84.31, count: 25},
  {name: 'Uganda', score: 84.05, count: 26},
  {name: 'Ecuador', score: 83.83, count: 1},
  {name: 'Panama', score: 83.71, count: 4},
  {name: 'Colombia', score: 83.11, count: 183},
  {name: 'El Salvador', score: 83.05, count: 21},
];

let countryData = [];
let loaded = false;

// Color palette - cooler brown/taupe tones
const BG = '#1A1A1A';
const CREAM = '#E8E4DF';
const ACCENT = '#8B7355';  // Cooler, earthier brown
const TEXT_DIM = '#7A756E';

function preload() {
  // Data is now embedded, so we can skip CSV loading
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Use the embedded data
  countryData = coffeeData.slice(0, 10);
  loaded = true;
}

function draw() {
  background(BG);
  
  if (!loaded || countryData.length === 0) {
    fill(CREAM);
    textSize(20);
    textAlign(LEFT, TOP);
    textFont('Space Grotesk');
    text('Loading...', 40, 40);
    return;
  }
  
  drawChart();
}

function drawChart() {
  let margin = 50;
  let headerHeight = 150;
  
  // ============ HEADER - SWISS STYLE ============
  
  // Title - all caps, bold, clean
  fill(CREAM);
  textFont('Space Grotesk');
  textStyle(BOLD);
  textSize(42);
  textAlign(LEFT, TOP);
  text('ARABICA COFFEE QUALITY', margin, margin);
  
  textStyle(NORMAL);
  
  // Subtitle - simple and clear
  fill(TEXT_DIM);
  textSize(13);
  text('Which countries grow the best coffee?', margin, margin + 52);
  
  // Data source - right aligned, clearer
  textAlign(RIGHT, TOP);
  textSize(10);
  text('Source: Coffee Quality Institute (CQI)', width - margin, margin);
  text('January 2018', width - margin, margin + 14);
  text('Cupping scores: 0-100 pts (80+ = specialty grade)', width - margin, margin + 28);
  
  // Divider
  stroke(TEXT_DIM);
  strokeWeight(0.5);
  line(margin, headerHeight - 10, width - margin, headerHeight - 10);
  noStroke();
  
  // Column headers
  fill(TEXT_DIM);
  textSize(9);
  textAlign(LEFT, BOTTOM);
  text('ORIGIN', margin, headerHeight + 8);
  text('AVERAGE SCORE', margin + 160, headerHeight + 8);
  textAlign(RIGHT, BOTTOM);
  text('COFFEES EVALUATED', width - margin, headerHeight + 8);
  
  // ============ BARS - CLEAN ============
  
  let barStartY = headerHeight + 15;
  let availableHeight = height - barStartY - 50;
  let barH = availableHeight / countryData.length;
  let barGap = 4;
  let actualBarH = barH - barGap;
  
  for (let i = 0; i < countryData.length; i++) {
    let d = countryData[i];
    let y = barStartY + i * barH;
    
    // Alternating row background
    if (i % 2 === 0) {
      fill(28);
      noStroke();
      rect(0, y, width, actualBarH);
    }
    
    // Country name
    fill(CREAM);
    textFont('Space Grotesk');
    textSize(12);
    textAlign(LEFT, CENTER);
    text(d.name.toUpperCase(), margin, y + actualBarH/2);
    
    // Bar
    let barStartX = margin + 160;
    let barMaxW = width - barStartX - margin - 80;
    let barW = map(d.score, 78, 87, 0, barMaxW);
    
    fill(ACCENT);
    noStroke();
    rect(barStartX, y + 10, barW, actualBarH - 20, 0, 2, 2, 0);
    
    // Score inside bar
    fill(CREAM);
    textSize(11);
    textAlign(LEFT, CENTER);
    text(d.score.toFixed(1), barStartX + 10, y + actualBarH/2);
    
    // Sample count - right side, just the number
    fill(TEXT_DIM);
    textSize(11);
    textAlign(RIGHT, CENTER);
    text(d.count, width - margin, y + actualBarH/2);
  }
  
  // ============ FOOTER / SCALE ============
  
  let footerY = height - 50;
  let barStartX = margin + 160;
  let barMaxW = width - barStartX - margin - 80;
  
  stroke(TEXT_DIM);
  strokeWeight(0.5);
  line(barStartX, footerY, barStartX + barMaxW, footerY);
  noStroke();
  
  fill(TEXT_DIM);
  textSize(9);
  textAlign(LEFT, TOP);
  text('78', barStartX, footerY + 4);
  
  textAlign(CENTER, TOP);
  text('82', barStartX + barMaxW * 0.5, footerY + 4);
  
  textAlign(RIGHT, TOP);
  text('87', barStartX + barMaxW, footerY + 4);
  
  // Dataset summary - single line at bottom
  fill(TEXT_DIM);
  textSize(10);
  textAlign(LEFT, BOTTOM);
  text('1,311 coffees tasted. The average score across origins was 82.1 points, a reassuring sign of steady quality, with U.S. Arabica lots standing out as top performers.', margin, height - 15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
