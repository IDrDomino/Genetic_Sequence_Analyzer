function analyzeSequence() {
  var inputSequence = document.getElementById("dnaSequence").value.toUpperCase();
  var nucleotideCount = {
    'A': 0,
    'T': 0,
    'C': 0,
    'G': 0
  };

  // Count nucleotides
  for (var i = 0; i < inputSequence.length; i++) {
    var nucleotide = inputSequence[i];
    if (nucleotideCount.hasOwnProperty(nucleotide)) {
      nucleotideCount[nucleotide]++;
    }
  }

  // Display results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Analysis Results:</h2>";
  outputDiv.innerHTML += "<p>Nucleotide Count: A(" + nucleotideCount['A'] + ") T(" + nucleotideCount['T'] + ") C(" + nucleotideCount['C'] + ") G(" + nucleotideCount['G'] + ")</p>";

  // Display complementary sequence
  var complementarySequence = getComplementarySequence(inputSequence);
  outputDiv.innerHTML += "<p>Complementary Sequence: " + complementarySequence + "</p>";
}

function getComplementarySequence(sequence) {
  var complementarySequence = "";
  for (var i = 0; i < sequence.length; i++) {
    var nucleotide = sequence[i];
    switch (nucleotide) {
      case 'A':
        complementarySequence += 'T';
        break;
      case 'T':
        complementarySequence += 'A';
        break;
      case 'C':
        complementarySequence += 'G';
        break;
      case 'G':
        complementarySequence += 'C';
        break;
    }
  }
  return complementarySequence;
}
