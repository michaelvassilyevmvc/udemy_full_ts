const test: null = null

function getRndData() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return "   Some data   ";
  }
}

const data = getRndData();
const trimmedData = data ? data.trim() : null;