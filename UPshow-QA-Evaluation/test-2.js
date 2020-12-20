module.exports = {
        'Register Happy Path': function(Register) {


                const namePath = 'name'
                'nameInputId'
                const lastNamePath = 'lastName'
                'lastNameInputId'
                const phonePath = 'phone'
                'phoneInputId'
                const emailPath = 'email'
                'emailInputId'
                const passwordPath = 'password'
                'passwordInputId'

                const nameImput = 'name'
                const lastNameInput = 'lastName'
                const phoneInput = 'phone'
                const emailInput = 'email'
                const passwordInput = 'password'


                Register
                    .url('Mi Sitio')
                    .waitForElementVisible('body', 1000)
                    .click('button[name=registerBttn]')
                    .waitForElementVisible('body', 1000)
                    .setValue(namePath, name)
                    .assert.visible('nameAlertLabel[type=text]')
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .setValue(lastnamePath, lastName)
                    .assert.visible('lastNameAlertLabel[type=text]')
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .setValue(phonePath, phone)
                    .assert.visible('phoneAlertLabel[type=number]')
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .setValue(emailPath, email)
                    .assert.visible('emailAlertLabel[type=text]')
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .setValue(passwordPath, password)
                    .assert.visible('passwordAlertLabel[type=text]')
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .setValue(passwordPath, reenterPassword)
                    .assert.visible('passwordAlertLabel[type=text]')
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                register..saveScreenshot('tests_output/form.png');
                .click('button[name=submitBttn]
                        .assert.visible('errorAlertLabel[type=text]')
                        .assert.visible('Error: El email ingresado ya está en uso')
                        .pause(2000) login..saveScreenshot('tests_output/clear-register.png');