export function getCardValue(apiValue) {
  switch (apiValue) {
    case 'JACK':
    case 'QUEEN':
    case 'KING':
      return 10;
    case 'ACE':
      return 1;
    default:
      return parseInt(apiValue);
  }
}
