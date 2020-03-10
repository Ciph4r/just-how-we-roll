
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}


const mean = (nums) => {
  let average = 0

  for (const num of nums){
      average += num
  }
  return average / nums.length
}

const median = (nums) => {
  let average = 0
  return nums.length%2 !== 0 ? 
  nums[Math.floor(nums.length /2)]
  :
  (nums[Math.floor(nums.length /2)] + 
  nums[Math.floor(nums.length /2)- 1]) /2
}




/******************
 * BUTTON QUERIES *
 ******************/
const diceOne = document.querySelector('#d6-roll')
const sixMean = document.querySelector('#d6-rolls-mean')
const sixMedian = document.querySelector('#d6-rolls-median')

const diceTwo = document.querySelector('#double-d6-roll-1')
const diceTwoTwo =  document.querySelector('#double-d6-roll-2')
const doubleMean = document.querySelector('#double-d6-rolls-mean')
const doubleMedian = document.querySelector('#double-d6-rolls-median')

const dicetwel = document.querySelector('#d12-roll')
const twelMean = document.querySelector('#d12-rolls-mean')
const twelMedian = document.querySelector('#d12-rolls-median')

const dicetwenty = document.querySelector('#d20-roll')
const twentyMean = document.querySelector('#d20-rolls-mean')
const twentyMedian = document.querySelector('#d20-rolls-median')


const resetbut = document.querySelector('#reset-button')



/******************
 * CLICK HANDLERS *'
 ******************/

const text = (text,text2,text3 = '',text4 = '') => {
text.innerHTML = text3
text2.innerHTML = text4
}
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}



const sixRoll = () => {
  let num = getRandomNumber(6)
  sixes.push(num)
  text(sixMean,sixMedian,financial((mean(sixes))),financial(median(sortByNumber(sixes))))
  diceOne.src = `images/d6/${num}.png`
}

const sixDouble = () => {
  let num = getRandomNumber(6)
  let numTwo = getRandomNumber(6)
  doubleSixes.push(num)
  doubleSixes.push(numTwo)
  text(doubleMean,doubleMedian,financial((mean(doubleSixes))),financial(median(sortByNumber(doubleSixes))))
  diceTwo.src = `images/d6/${num}.png`
  diceTwoTwo.src = `images/d6/${numTwo}.png`
}


const twelveRoll = () => {

  let num= getRandomNumber(12)
  twelves.push(num)
  text(twelMean,twelMedian,financial((mean(twelves))),financial(median(sortByNumber(twelves))))
  dicetwel.src = `images/numbers/${num}.png`
}


const twentyRoll = () => {
  let num = getRandomNumber(20)
  twenties.push(num)
text(twentyMean,twentyMedian,financial((mean(twenties))),financial(median(sortByNumber(twenties))))
  dicetwenty.src = `images/numbers/${num}.png`
}


const reset = () => {
   sixes.splice(0)
 doubleSixes.splice(0)
 twelves.splice(0)
 twenties.splice(0)
 diceOne.src = `images/start/d6.png`
 diceTwo.src = `images/start/d6.png`
 diceTwoTwo.src = `images/start/d6.png`
 dicetwel.src = `images/start/d12.jpeg`
 dicetwenty.src = `images/start/d20.jpg`
text(sixMean,sixMedian)
text(doubleMean,doubleMedian)
text(twelMean,twelMedian)
text(twentyMean,twentyMedian)


}

/*******************
 * EVENT LISTENERS *
 *******************/
diceOne.addEventListener('click',sixRoll)
diceTwo.addEventListener('click',sixDouble)
diceTwoTwo.addEventListener('click',sixDouble)
dicetwel.addEventListener('click',twelveRoll)
dicetwenty.addEventListener('click',twentyRoll)
resetbut.addEventListener('click',reset)

/****************
 * MATH SECTION *
 ****************/



/********************
* MATH-AREA QUERIES *
********************/


