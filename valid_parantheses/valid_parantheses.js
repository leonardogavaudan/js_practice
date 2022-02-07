function validParentheses(parens) {
  const stack = [];
  const pList = parens.split('');
  const matching = { '}': '{', ']': '[', ')': '(' };

  for (let i = 0; i < pList.length; i++) {
    if (['{', '[', '('].includes(pList[i])) stack.push(pList[i]);
    else {
      const popped = stack.pop();
      if (matching[pList[i]] !== popped) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = validParentheses;
