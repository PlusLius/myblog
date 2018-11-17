const Nightmare = require('nightmare');
const expect = require('chai').expect;



describe('test index.html',() => {
    it('第一个按钮的值应该等于发布',(done) => {
        const nightmare = Nightmare()
        nightmare
        .goto('http://127.0.0.1:8080')
        .wait(5000)
        .evaluate( () => {
            return document.querySelector('.a').textContent
          })
        .end()
        .then(text => {
          expect(text).to.equal('发布')
          done()
        }).catch(error => {
          done()
          console.error('Search failed:', error)
        })
    })
    it('第二个按钮的值应该等于归类',(done)=>{
        const nightmare = Nightmare()
        nightmare
        .goto('http://127.0.0.1:8080')
        .wait(5000)
        .evaluate( () => {
            return document.querySelector('.b').textContent
          })
        .end()
        .then(text => {
          expect(text).to.equal('归类')
          done()
        }).catch(error => {
          done()
          console.error('Search failed:', error)
        })
    })
    it('第三个按钮的值应该等于展示',(done)=>{
      const nightmare = Nightmare()
      nightmare
      .goto('http://127.0.0.1:8080')
      .wait(5000)
      .evaluate( () => {
          return document.querySelector('.c').textContent
        })
      .end()
      .then(text => {
        expect(text).to.equal('展示')
        done()
      }).catch(error => {
        done()
        console.error('Search failed:', error)
      })
  })
})


