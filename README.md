Boiler plate code for a nodejs app that uses a local instance of mongodb.  
### install mongodb
brew cask install gcollazo-mongodb
### to add mongodb to path add this to  ~/bash_profile
export PATH="/Applications/MongoDB.app/Contents/Resources/Vendor/mongodb/bin:$PATH"
### start mongo daemon
 mongod
### start mongo command line tool 
 mongo
