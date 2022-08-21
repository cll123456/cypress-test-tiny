import MessageInput from './MessageInput.vue'
describe('<MessageInput>', () => {

  it('mount component', () => {
    cy.mount(MessageInput)
  })

  it('MessageInput在数据输入，点击功能测试', () => {
    cy.mount(MessageInput)
    // 找到input输入内容
    cy.get('[data-test=testMessage]').type('hello cypress');
    // 找到按钮并且点击
    cy.get('[data-test=testButton]').click();
    // 输入框内容为空
    cy.get('[data-test=testMessage]').should('have.value', '');
    // 触发emit事件
    expect(cy.get('[data-test=testButton]').emitted('sendMessage')).to.exist;
    // 检查事件参数
    expect(cy.get('[data-test=testButton]').emitted('sendMessage')[-1][0]).to.equal('hello cypress');
  })
})
