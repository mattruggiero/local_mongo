# local_mongo
Boiler plate code for a nodejs app that uses a local instance of mongodb.  

brew cask install gcollazo-mongodb
#add mongodb to path 
#in ~/bash_profile
export PATH="/Applications/MongoDB.app/Contents/Resources/Vendor/mongodb/bin:$PATH"

#start daemon
mongod

#start mongo command line tool 
mongo
