export function getText(html) {
  let divContainer = document.createElement('div')
  divContainer.innerHTML = html
  return divContainer.textContent || divContainer.innerText || ''
}

export function formatMoney(amount, suffix = '￥') {
  return `${amount}${suffix}`
}

export function formatOption(text, options) {
  return options.find((opt) => opt.value === text.trim())?.label || ''
}

export function stripHTML(string) {
  let tmp = document.createElement('DIV')
  tmp.innerHTML = string
  return tmp.textContent || tmp.innerText || ''
}

export function renderQuestionType(t, type) {
  switch (type) {
    case 'CHOOSE_MANY': return t('unit_setting:question_setting.multiple_choice')
    case 'DESCRIPTION': return t('unit_setting:question_setting.description_choice')
    case 'SELECT_ONE': return t('unit_setting:question_setting.single_choice')
    default:
      return '-'
  }
}

export function renderTypeAnswer(t, type) {
  switch (type) {
    case 'UNREQUIRED':
      return t('common:label_optional')
    case 'REQUIRED':
      return t('common:label_required')
    default:
      return '-'
  }
}

export function camel2Text(key) {
  const result = key.replace(/([A-Z])/g, ' $1')
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1)
  return finalResult
}
