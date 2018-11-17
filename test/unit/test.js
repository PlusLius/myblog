const expect = require('chai').expect
const log = require('../../src/app')

describe('测试页面中的按钮值',() => {
   it('应该输出暂无内容',() => {
        expect(log()).to.equal('暂无内容')
   })
})