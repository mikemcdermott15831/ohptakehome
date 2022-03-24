const ohpcls = require('./libraries/ohp')

const ohp = new ohpcls()

test('doGenerateMBI should generate a an 11 character MBI plus two dashes', () => {
    expect(ohp.doGenerateMBI().length).toBe(13)
})

test('verifyMBI should fail MBIs that are not the right length', () => {
    expect(ohp.doVerifyMBI("8W79-TE4-QU8")).toBe(false)
})

test('verifyMBI should fail MBIs that contain lowercase letters', () => {
    expect(ohp.doVerifyMBI("8W79-tE4-QU87")).toBe(false)
})

test('verifyMBI should fail MBIs that have a character at the first position', () => {
    expect(ohp.doVerifyMBI("tW79-TE4-QU87")).toBe(false)
})

test('verifyMBI should fail MBIs that have an illegal character', () => {
    expect(ohp.doVerifyMBI("TW79-TE4-SU87")).toBe(false)
})

test('verifyMBI should verify a correct MBI', () => {
    expect(ohp.doVerifyMBI("8W79-TE4-QU87")).toBe(true)
})
