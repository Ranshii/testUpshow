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
                    .assert.visible('input[type=text]')
                    .setValue(namePath, name)
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .assert.visible('input[type=text]')
                    .setValue(namePath, lastName)
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .assert.visible('input[type=number]')
                    .setValue(namePath, phone)
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                    .assert.visible('input[type=text]')
                    .setValue(namePath, email)
                    .waitForElementVisible('body', 1000)
                    .pause(2000)
                register..saveScreenshot('tests_output/form.png');
                .click('button[name=submitBttn]
                    .pause(2000) login..saveScreenshot('tests_output/clear-register.png');
                }