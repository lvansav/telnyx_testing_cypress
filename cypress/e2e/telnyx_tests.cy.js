const MainPage = require('../pages/main.page')

const AllProductPage = require('../pages/all.product.page')
const FaxApiProdPage = require('../pages/fax.api.prod.page')

const ManagedServProvidersPage = require('../pages/managed.serv.providers.page')
const SolutionNetworkPage = require('../pages/solution.network.page')

const PricingPage = require('../pages/pricing.page')
const VoiceApiPricingPage = require('../pages/voice.api.pricing.page')

const BlogPage = require('../pages/blog.page')

const DocsPage = require('../pages/docs.page')
const VideoRoomPage = require('../pages/video.room.docs.page')

const baseURL = Cypress.config().baseUrl

describe('Testing common futuares on the Telnyx website', () => {
  
  beforeEach(() => {
    cy.visit('/')
    cy.AcceptAllCookies()
  })
  
  it('Sign up by filling in all fields with random valid data', () => {
    const mainPage = new MainPage

    const signUpPage = mainPage.headerSignUpBtnClick()
    
    cy.url()
      .should('eq', `${baseURL}/sign-up`)
    
    const verifyData = signUpPage.signUpByAllFields()
    
    const verifyEmailPage = verifyData.page
    const verifyEmail = verifyData.email

    cy.url({ timeout: 20000 })
      .should('eq', `${baseURL}/sign-up/verify-email/f`)
    
    verifyEmailPage
      .getVerifyEmail()
      .should('have.text', verifyEmail)
    
    verifyEmailPage
      .getBackBtn()
      .should('be.visible')
  })

  it('Sign up after "Try it for free" click by filling in required fields with random valid data"', () => {
    const mainPage = new MainPage()

    const signUpData = mainPage.addEmailAndTryForFree()
    
    const signUpPage = signUpData.page
    const email = signUpData.email
    
    cy.url()
      .should('contain', `${baseURL}/sign-up`)
    
    signUpPage
      .getEmailInput()
      .should('have.value', email)
    
    const verifyEmailPage = signUpPage.signUpAfterTryItForFree()
    
    cy.url({ timeout: 20000 }).should('eq', `${baseURL}/sign-up/verify-email/f`)
    
    verifyEmailPage
      .getVerifyEmail()
      .should('have.text', email)
    
    verifyEmailPage
      .getBackBtn()
      .should('be.visible')
  })

  it('Sign up after "Start your free trial" click by filling in required fields with random valid data', () => {
    const mainPage = new MainPage()
    
    const signUpPage = mainPage.mainSignUpBtnClick()

    cy.url({ timeout: 20000 }).should('contain', `${baseURL}/sign-up`)

    const verifyData = signUpPage.signUpByRequireFields()
    
    const verifyEmailPage = verifyData.page
    const verifyEmail = verifyData.email

    cy.url({ timeout: 20000 })
      .should('eq', `${baseURL}/sign-up/verify-email/f`)
    
    verifyEmailPage
      .getVerifyEmail()
      .should('have.text', verifyEmail)
    
    verifyEmailPage
      .getBackBtn()
      .should('be.visible')
  })

  it('Go to the "Fax API docs" page from main page', () => {
    const mainPage = new MainPage()
    const allProductPage = new AllProductPage()
    const faxApiProdPage = new FaxApiProdPage()

    mainPage
      .hoverHeader()

    mainPage
      .openAndGetProdDropItems()
      .should('be.visible')
    
    mainPage.allProductHeadLinkClick()

    cy.url()
      .should('eq', `${baseURL}/products`)
    
    allProductPage.faxApiClick()
    
    cy.url()
      .should('contain', `${baseURL}/products/fax-api`)

    const faxApiDocsPage = faxApiProdPage.faxDocsLinkClick()

    cy.url()
      .should('contain', `https://developers.telnyx.com/docs/v2/programmable-fax`)

    faxApiDocsPage
      .getSetupProgFaxBtn()
      .should('be.visible')

    faxApiDocsPage
      .getSeeTheSpecsBtn()
      .should('be.visible')

    faxApiDocsPage
      .getSideBarSearchInput()
      .should('be.visible')
  })

  it('Go to the "Fax API setting up" page from main page', () => {
    const mainPage = new MainPage()
    const allProductPage = new AllProductPage()
    const faxApiProdPage = new FaxApiProdPage()
    
    mainPage
      .hoverHeader()

    mainPage
      .openAndGetProdDropItems()
      .should('be.visible')
    
    mainPage.allProductHeadLinkClick()

    cy.url()
      .should('eq', `${baseURL}/products`)
    
    allProductPage.faxApiClick()
    
    cy.url()
      .should('contain', `${baseURL}/products/fax-api`)

    const faxSupportPage = faxApiProdPage.faxSupportLinkClick()
    
    cy.url()
      .should('contain', 'fax-service-with-telnyx')

    faxSupportPage
      .getSearchInput()
      .should('be.visible')

    faxSupportPage
      .getLastBreadcrumb()
      .should('contain', "Fax service with Telnyx")
  })

  it('Go to the "Voice API pricing for UK" page from main page', () => {
    const mainPage = new MainPage()
    const managedServPage = new ManagedServProvidersPage()
    const voiceApiPricingPage = new VoiceApiPricingPage()


    mainPage
      .hoverHeader()

    mainPage
      .openAndGetSolutionDropItems()

    mainPage
      .managedServHeadLinkClick()

    cy.url()
      .should('contain', `${baseURL}/use-cases/managed-services-telephony`)

    managedServPage
      .pricingVoiceApiLinkClick()

    cy.url()
      .should('contain', `${baseURL}/pricing/call-control`)

    voiceApiPricingPage
      .openCountryDropdown()

    voiceApiPricingPage
      .selectUKCountry()

    cy.url()
      .should('contain', `${baseURL}/pricing/call-control/gb`)


    voiceApiPricingPage
      .getPageTitle()
      .should('contain', 'United Kingdom')

    voiceApiPricingPage
      .getCurrencyDropdown('Make and receive calls in')
      .should('include.text', 'GBP')
  })

  it('Go to "Developers docs" page from main page and search "video javascript" by the search field', () => {
    const mainPage = new MainPage()
    const docsPage = new DocsPage()
    const videoRoomPage = new VideoRoomPage()

    mainPage 
      .hoverHeader()

    mainPage
      .openAndGetResourcesDropItems()
      .should('be.visible')

    mainPage
      .docsHeadLinkClick()

    cy.url()
      .should('contain', 'https://developers.telnyx.com/docs/v2')

    docsPage
      .inputInSearchField('video javascript')

    docsPage
      .clickPossibleSearchResult(0)

    cy.url()
      .should('eq', 'https://developers.telnyx.com/docs/v2/video-rooms')

    videoRoomPage
      .getPageTitle()
      .should('have.text', 'Video Rooms')
  })

  it('Go to "Contact us" page from main page and request support by filling all fields with random data', () => {
    const mainPage = new MainPage()
    
    const contactUsPage = mainPage.headerContactUsBtnClick()

    cy.moveFromHeader()

    contactUsPage
      .selectSupportReason()

    const userData = contactUsPage.fillAllFields()

    contactUsPage
      .getFirstNameField()
      .should('have.value', userData.firstName)
    
    contactUsPage
      .getLastNameField()
      .should('have.value', userData.lastName)
    
    contactUsPage
      .getEmailField()
      .should('have.value', userData.email)
    
    contactUsPage
      .getPhoneCode()
      .find(`option`)
      .eq(userData.code)
      .should('be.selected')
  
    contactUsPage
      .getPhoneNumber()
      .should('have.value', userData.number)
      
    contactUsPage
      .getWebsiteField()
      .should('have.value', userData.url)
    
    contactUsPage
      .getAdditionalField()
      .should('have.value', userData.text)
      
    contactUsPage
      .getSubscribeCheckbox()
      .should('be.checked')
  })

  it('Go to last article page in the "Blog" page from main page', () => {
    const mainPage = new MainPage()
    const blogPage = new BlogPage()

    mainPage
      .hoverHeader()
    
    mainPage
      .openAndGetResourcesDropItems()
      .should('be.visible')

    mainPage
      .blogHeadLinkClick()

    cy.url()
      .should('eq', `${baseURL}/resources`)

    blogPage
      .moveFromHeader()

    blogPage
      .getLastArticle()
      .click()
  })

  it('Go to the "Blog" page from main page and subscribe to the Telnyx blog with random valid email', () => {
    const mainPage = new MainPage()
    const blogPage = new BlogPage()

    mainPage 
      .hoverHeader()
  
    mainPage
      .openAndGetResourcesDropItems()
      .should('be.visible')

    mainPage
      .blogHeadLinkClick()

    blogPage
      .moveFromHeader()

    blogPage
      .typeRandomEmail()

    blogPage
      .subscribeBtn()

    blogPage
      .getSubscribeSuccessMsg()
      .should('exist')
  })

  it('Go to "Networking pricing" page from main page', () => {
    const mainPage = new MainPage
    const solutionNetworkPage = new SolutionNetworkPage
    const pricingPage = new PricingPage

    mainPage
      .networkHeadBtnClick()

    cy.url()
      .should('eq', `${baseURL}/solutions/global-ip-network`)

    cy.moveFromHeader()
  
    solutionNetworkPage
      .pricingBtnClick()

    cy.url()
      .should('eq', `${baseURL}/pricing`)

    const networkPricingPage = pricingPage.networkPricingLinkClick()

    cy.url()
      .should('eq', `${baseURL}/pricing/networking`)

    networkPricingPage
      .getPageTitle()
      .should('have.text', 'Networking pricing')
  })
})