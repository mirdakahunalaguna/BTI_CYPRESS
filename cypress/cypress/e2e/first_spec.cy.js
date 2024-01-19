describe('bti_test', () => {
  it('input_success', () => {
    
    cy.visit('http://192.168.1.6:8080/')
    cy.wait(1000)//waktu jeda
    cy.get('#email').type('mirda_arafat@example.com')
    cy.wait(1000)
    cy.get('#name').type('mirda halo')
    cy.wait(1000)
    cy.get('#gender').type('male')
    cy.wait(1000)
    cy.get('input[type="file"]').attachFile('default_img.jpeg')
    cy.wait(1000)
    cy.get('#handle_submit').click()
  })

  it('load_form', () => { 
    cy.visit('http://192.168.1.6:8080/') 
    cy.wait(1000)
    cy.get('#load_form').click()
  });

  it('edit_form', () => {
    cy.wait(1000) 
    cy.visit('http://192.168.1.6:8080/') 
    cy.wait(1000)
    cy.get('#name').type('mirda halo halo')
    cy.wait(1000)
    cy.get('#handle_change').click()
  });

  it('delete_success', () => {
    cy.wait(1000) 
    cy.visit('http://192.168.1.6:8080/') 
    cy.wait(1000)
    cy.get('#hapus').click()
  });
});
