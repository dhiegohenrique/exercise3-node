describe("Página inicial", function() {
    
    beforeEach(function() {
        browser.get("http://localhost:3000/");
    });

    it("Deve verificar se a página inicial foi carregada.", function() {
        var form = element(by.name("cityForm"));
        expect(form.isPresent()).toBe(true);
    });

    it("Deve verificar se as linguagens foram carregadas.", function() {
        getLanguagesCount()
            .then(function(count) {
                expect(count).toBeGreaterThan(0);
            });
    });

    it("Deve verificar se a mensagem de validação é exibida quando nenhuma cidade for informada.", function() {
        submit("")
            .then(function() {
                validateErrorMessage("alert-danger", "Enter the name of");
            });
    });

    it("Deve verificar se a mensagem de cidade inválida é exibida quando uma cidade inválida for informada.", function() {
        submit("asdfasdfasdfasdfaw323")
            .then(function() {
                validateErrorMessage("alert-warning", "not found");
            });
    });

    it("Deve verificar se o resultado é exibido quando uma cidade válida for informada.", function() {
        submit("florianopolis")
            .then(function() {
                var result = element(by.binding("searchFormatDate"));
                expect(result.isPresent()).toBe(true);
            });
    });

    it("Deve verificar se a linguagem foi trocada.", function() {
        browser.getTitle().then(function(oldPageTitle) {
            getLanguagesCount()
                .then(function(count){
                    selectLanguage(count - 1, oldPageTitle);
                });
        });
    });

    function getLanguagesCount() {
        var allOptions = element.all(by.options("language.id as language.name for language in languages"));
        return allOptions.count();
    };

    function selectLanguage(index, oldPageTitle ) {
        var selectDropdownElement = element(by.id('language'));
        selectDropdownElement.all(by.tagName('option'))
            .then(function(options) {
                 options[index].click()
                    .then(function() {
                        validatePageTitle(oldPageTitle);
                    });
            });

    };

    function validatePageTitle(oldPageTitle) {
        browser.getTitle().then(function(newPageTitle) {
            expect(oldPageTitle).not.toEqual(newPageTitle);
        });
    };

    function validateErrorMessage(errorClass, errorMessage) {
        element(by.css("." + errorClass + " h5"))
            .getText()
                .then(function(text) {
                    expect(text).toContain(errorMessage);
                });
    };

    function submit(city) {
        element(by.model("city")).sendKeys(city);

        var button = element(by.css(".btn-primary"));
        return button.click();
    };
});