This is the Node101 Movie Finder Data project:

It is able make GET requests to the OMDB site following their protocol and 
respond with the correct bits of data that they respond to those GET requests with. 
Also, it will make the request to their servers the first time a piece of info is requested, 
but will store any item requested in a local object, in json format to be recalled
more quickly if requested again without having to make a duplicate request to their servers. 

With NPM, express, morgan and axios installed it will work on a local server you make
using the npm start command. 