get_data <- function(file, hhead, pos){
data <- read.csv(file, sep=';', dec='.', head= hhead)
data <- data[pos,]
data
}
get_my_data <- function(test_input){
guaje_data = get_data( paste(test_input$url_data, 'BEER.txt.kb.xml.RP.kb.xml.FDTP.kb.xml.S.kb.xml.csv',  sep=''), T, test_input$pos)
my_data <- guaje_data
my_data
}
input <- c()
my_method <- function (input){
input
}
guaje_data <- data_structure(test_input, get_my_data)
data <- data_structure(input, my_method)
