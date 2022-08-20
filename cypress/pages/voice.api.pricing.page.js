const PricingBase = require('./pricing.base')


class VoiceApiPricingPage extends PricingBase{

    dropdownLable() {
        return 'Make and receive calls in'
    }

    openCountryDropdown() {
        const label = this.dropdownLable()
        return super.getCountryDropdown(label)
                    .click()
    }

    selectUKCountry() {
        const label = this.dropdownLable()
        return super.selectUKCountry(label)
    }


}

module.exports = VoiceApiPricingPage