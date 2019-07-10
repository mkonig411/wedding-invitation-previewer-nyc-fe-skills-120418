const nameOne = document.getElementById('name_one')
const nameTwo = document.getElementById('name_two')
const date = document.getElementById('date')
const locationName = document.getElementById('location_name')
const locationAddress = document.getElementById('location_address')

const inviteNameOne = document.getElementById('inviteName1')
function nameOneTyping () {
  const nameOneTyped = nameOne.value;
  inviteNameOne.innerText = nameOneTyped
}
nameOne.addEventListener('keyup', nameOneTyping)

const inviteName2 = document.getElementById('inviteName2')
function nameTwoTyping () {
  const nameTwoTyped = nameTwo.value;
  inviteName2.innerText = nameTwoTyped
}
nameTwo.addEventListener('keyup', nameTwoTyping)

const inviteDate = document.getElementById('inviteDate')
function dateTyping () {
  const dateTyped = date.value;
  inviteDate.innerText = dateTyped
}
date.addEventListener('keyup', dateTyping)

const inviteLocationName = document.getElementById('inviteLocationName')
function locationNameTyping () {
  const locationNameTyped = locationName.value;
  inviteLocationName.innerText = locationNameTyped
}
locationName.addEventListener('keyup', locationNameTyping)

const inviteLocationAddress = document.getElementById('inviteLocationAddress')
function locationAddressTyping () {
  const locationAddressTyped = locationAddress.value;
  inviteLocationAddress.innerText = locationAddressTyped
}
locationAddress.addEventListener('keyup', locationAddressTyping)

const funkyButton = document.getElementById('funkyButton')
const invitation = document.querySelector('.container3')
function clickFunky () {
  invitation.classList.remove("fresh","formal");
  invitation.classList.add("funky")
}
funkyButton.addEventListener('click', clickFunky)

const freshButton = document.getElementById('freshButton')
function clickFresh () {
  invitation.classList.remove("funky","formal");
  invitation.classList.add("fresh")
}
freshButton.addEventListener('click', clickFresh)

const formalButton = document.getElementById('formalButton')
function clickFormal () {
  invitation.classList.remove("funky","fresh");
  invitation.classList.add("formal")
}
formalButton.addEventListener('click', clickFormal)


