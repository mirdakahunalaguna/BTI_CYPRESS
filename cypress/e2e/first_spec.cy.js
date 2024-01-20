describe('bti_test', () => {
  
  it('input_success', () => {    
    cy.visit('http://192.168.1.6:8080/')     
    //waktu jeda
    cy.get('#email').type('mirda_arafat@gmail.com')
    
    cy.get('#name').type('mirda arafat')
    
    cy.get('#gender').select('male')
    
    cy.get('input[type=file]').selectFile('cypress/fixtures/default_img.jpeg')
    
    cy.get('#handle_submit').click()
  })
  
  it('input_success_select_female', () => {    
    cy.visit('http://192.168.1.6:8080/')     
    //waktu jeda
    cy.get('#email').type('mirda_yanuar@gmail.com')
    
    cy.get('#name').type('mirda halo')
    
    cy.get('#gender').select('female');
    
    cy.get('input[type=file]').selectFile('cypress/fixtures/unduhan.jpeg')
    
    cy.get('#handle_submit').click()
  })

  it('input_email_already_registered', () => {    
    cy.visit('http://192.168.1.6:8080/') 
    cy.get('#email').type('mirda_arafat@gmail.com')
    
    cy.get('#name').type('mirda halo')
    
    cy.get('#gender').type('male')
    
    cy.get('input[type=file]').selectFile('cypress/fixtures/default_img.jpeg')
    
    cy.get('#handle_submit').click()
  })

  it('edit_form', () => { 
    cy.visit('http://192.168.1.6:8080/') 
    cy.get('#load_form').click()
    cy.get('#name').type('mirda halo halo')    
    cy.get('input[type=file]').selectFile('cypress/fixtures/default_img.jpeg')
    cy.get('#handle_change').click()
  });

  it('sorting_table_row', () => { 
    cy.visit('http://192.168.1.6:8080/') 
    cy.get('#label_name').click()
    cy.get('#label_email').click()
    cy.get('#label_gender').click()
  })

  it('delete_success', () => {     
    cy.visit('http://192.168.1.6:8080/')     
    cy.get('#hapus:first').click()
  });
});

