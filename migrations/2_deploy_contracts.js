var StringBytes32Util = artifacts.require('./StringBytes32Util.sol')
var UserContentRegister = artifacts.require('./UserContentRegister.sol')
var PublicationRegister = artifacts.require('./PublicationRegister.sol')

module.exports = function (deployer) {
  return deployer.deploy(StringBytes32Util).then(() => {
	  return deployer.deploy(UserContentRegister, StringBytes32Util.address).then(() => {
		  return deployer.deploy(PublicationRegister, UserContentRegister.address, StringBytes32Util.address);
	  });
  });
}
