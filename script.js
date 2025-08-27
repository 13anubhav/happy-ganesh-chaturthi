
    let candlesLit = false;
    let praiseInterval;

    function lightCandles() {
      const candles = document.querySelectorAll('.candle');
      const button = document.querySelector('.light-button');
      
      if (!candlesLit) {
        // Light candles one by one
        candles.forEach((candle, index) => {
          setTimeout(() => {
            candle.classList.add('lit');
          }, index * 200);
        });
        
        button.innerHTML = '<i class="fas fa-wind"></i> Blow Out';
        candlesLit = true;
      } else {
        // Blow out candles
        candles.forEach((candle, index) => {
          setTimeout(() => {
            candle.classList.remove('lit');
          }, index * 100);
        });
        
        button.innerHTML = '<i class="fas fa-fire"></i> Light Candles';
        candlesLit = false;
      }
    }

    function praiseGanesha() {
      // Create multiple flower petals
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          createFlowerPetal();
        }, i * 100);
      }
    }

    function createFlowerPetal() {
      const petal = document.createElement('div');
      const flowerTypes = ['', 'marigold', 'rose', 'jasmine'];
      const randomType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
      
      petal.className = `flower-petal ${randomType}`;
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = (Math.random() * 2 + 3) + 's';
      petal.style.animationDelay = Math.random() * 1 + 's';
      
      document.body.appendChild(petal);
      
      // Remove petal after animation
      setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, 6000);
    }

    // Auto-praise on Ganesh image click
    document.querySelector('.ganeshJee').addEventListener('click', function() {
      praiseGanesha();
    });

    // Continuous gentle flower fall
    setInterval(() => {
      if (Math.random() > 0.7) {
        createFlowerPetal();
      }
    }, 2000);
