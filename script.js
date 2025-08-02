const readerName = "Marzia";
const currentMonth = "July";
console.log(`Reader: ${readerName}`);
console.log(`Month: ${currentMonth}`);


const bookTitles = ["Automic Habits", "the power of subconciues mind", "Rich Dad and Poor Dad"];
const totalPages = [310, 328, 281];
const pagesRead = [310, 160, 70];



for (let i = 0; i < bookTitles.length; i++) {
  console.log(`Book ${i + 1}: ${bookTitles[i]}`);
  console.log(`  Total Pages: ${totalPages[i]}`);
  console.log(`  Pages Read: ${pagesRead[i]}`);
}



function calculateProgress(pagesRead, totalPages) {
  return Math.round((pagesRead / totalPages) * 100);
}

function getReadingStatus(progressPercent) {
  if (progressPercent === 100) {
    return "Finished";
  } else if (progressPercent >= 50) {
    return "In Progress";
  } else {
    return "Just Started";
  }
}

function printBookSummary(title, pagesRead, totalPages) {
  const progress = calculateProgress(pagesRead, totalPages);
  const status = getReadingStatus(progress);
  console.log(`${title}: ${pagesRead}/${totalPages} pages read — ${status}`);
}


console.log("\n--- Book Summaries ---");
for (let i = 0; i < bookTitles.length; i++) {
  printBookSummary(bookTitles[i], pagesRead[i], totalPages[i]);
}


function totalPagesRead(pagesReadArray) {
  let total = 0;
  for (let pages of pagesReadArray) {
    total += pages;
  }
  return total;
}

function findBookWithMostPagesLeft(titlesArray, pagesReadArray, totalPagesArray) {
  let maxPagesLeft = 0;
  let bookWithMostLeft = "";

  for (let i = 0; i < titlesArray.length; i++) {
    const pagesLeft = totalPagesArray[i] - pagesReadArray[i];
    if (pagesLeft > maxPagesLeft) {
      maxPagesLeft = pagesLeft;
      bookWithMostLeft = titlesArray[i];
    }
  }

  return bookWithMostLeft;
}

function printReadingSummary(readerName, month, pagesReadArray) {
  const totalRead = totalPagesRead(pagesReadArray);
  console.log(`\n${readerName}'s reading progress for ${month}: ${totalRead} pages read.`);
}


printReadingSummary(readerName, currentMonth, pagesRead);

const bookMostLeft = findBookWithMostPagesLeft(bookTitles, pagesRead, totalPages);
console.log(`Book with the most pages left: ${bookMostLeft}`);
