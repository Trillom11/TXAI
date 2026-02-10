library(rLDCP);
setwd('C:/GUAJE-vb4.0/users/josealonso/BEER/training');
url_data = './'
url_glmp = './'
url_ldcp = './'
url_results = './'
file_rnw_name = 'report-guaje'
pos = 1
test_input = list(url_data = url_data, pos =  pos)
source(paste(url_ldcp,'data_acquisition.R',sep=''))
source(paste(url_ldcp,'glmpGuaje.R',sep=''))
source(paste(url_ldcp,'generate_reportGuaje.R',sep=''))
my_ldcp = ldcp(data,my_glmpGuaje,my_reportGuaje)
current_input <- c(guaje_data$method(test_input)$Color[pos],guaje_data$method(test_input)$Bitterness[pos],guaje_data$method(test_input)$Strength[pos])
dnum= guaje_data$input$pos
my_ldcp= ldcp_run(ldcp=my_ldcp,input=current_input)
