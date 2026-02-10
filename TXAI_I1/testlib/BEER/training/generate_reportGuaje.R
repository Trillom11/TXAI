get_max_position <- function(list_pms){
value <- 0
relevance <- 0
for(i in 1:length(list_pms)){
ind_r <- which.max(list_pms[[i]]$y$w)
local_value <- list_pms[[i]]$y$w[ind_r]
local_relevance <- list_pms[[i]]$y$r[ind_r]
if(value*relevance < local_value*local_relevance){
position = i
value = local_value
relevance = local_relevance
}
}
position
}

dnum<-1

report_methodGuaje <- function(properties,pm){
properties$report_title = 'New Knowledge Base'
properties$dataN = dnum
properties$dataCOLOR = pm$pm1_guaje_color$u
properties$color = pm_report(pm$pm1_guaje_color)
properties$dataBITTERNESS = pm$pm1_guaje_bitterness$u
properties$bitterness = pm_report(pm$pm1_guaje_bitterness)
properties$dataSTRENGTH = pm$pm1_guaje_strength$u
properties$strength = pm_report(pm$pm1_guaje_strength)
aux= pm$pm2_guaje_class$y$w
ind= which.max(aux)
if (aux[ind]>0) {
properties$class = pm_report(pm$pm2_guaje_class)
} else {
properties$class = 'I can not make a decision'
}
properties$className = pm$pm2_guaje_class$y$a[ind]
properties$classCOLOR = (properties$dataCOLOR/45.0)
properties$classBITTERNESS = (properties$dataBITTERNESS/250.0)
properties$classSTRENGTH = (properties$dataSTRENGTH/0.136)
aux[ind]= -1
ind2= which.max(aux)
aux[ind2]= -1
ind3= which.max(aux)
if (pm$pm2_guaje_class$y$w[ind] > 0) {
if (pm$pm2_guaje_class$y$w[ind2] > 0) {
dif= pm$pm2_guaje_class$y$w[ind] - pm$pm2_guaje_class$y$w[ind2]
} else {
dif= pm$pm2_guaje_class$y$w[ind]
}
pm2_guaje_rules = pm_multidimensional(pm$pm2_guaje_r1,pm$pm2_guaje_r2,pm$pm2_guaje_r3,pm$pm2_guaje_r4,pm$pm2_guaje_r5,pm$pm2_guaje_r6,pm$pm2_guaje_r7,pm$pm2_guaje_r8)
ind_rr= get_max_position(pm2_guaje_rules)
warn= FALSE
msg= ''
if (pm$pm2_guaje_class$y$w[ind] > 0.875) {
msg= 'We have very high confidence in the classification result because activation degree is higher than 0.875.'
} else if (pm$pm2_guaje_class$y$w[ind] > 0.625) {
msg= 'We have high confidence in the classification result because activation degree is between 0.625 and 0.875.'
} else if (pm$pm2_guaje_class$y$w[ind] > 0.375) {
msg= 'We have medium confidence in the classification result because activation degree is between 0.375 and 0.625.'
} else if (pm$pm2_guaje_class$y$w[ind] > 0.125) {
msg= 'We have low confidence in the classification result because activation degree is between 0.125 and 0.375.'
} else {
msg= 'We have very low confidence in the classification result because activation degree is smaller or equal than 0.125.'
}
if (dif > 0.5) {
msg= paste(msg,' It is very likely that this class is ',pm$pm2_guaje_class$y$a[ind],sep='')
if (pm$pm2_guaje_class$y$w[ind2] > 0.1) {
msg= paste(msg,'. There is also a small chance that it is ',pm$pm2_guaje_class$y$a[ind2],'. ',sep='')
if ( (length(aux) > 2) & (ind3 != ind2) & (pm$pm2_guaje_class$y$w[ind3] > 0.1) ) {
msg= paste(msg,' There is even a smaller chance that the class is ',pm$pm2_guaje_class$y$a[ind3],'. ',sep='')
}
msg= paste(msg,' On balance, ',pm$pm2_guaje_class$y$a[ind], ' is more likely, because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
} else {
msg= paste(msg,', because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
}
} else if (dif <= 0.1) {
warn= TRUE
msg= paste(msg,' The class is probably ',pm$pm2_guaje_class$y$a[ind],' or ',pm$pm2_guaje_class$y$a[ind2],'. ',sep='')
if ( (dif > 0) & (length(aux) > 2) & (ind3 != ind2) & (pm$pm2_guaje_class$y$w[ind3] > 0.1) ) {
msg= paste(msg,' There is also a smaller chance that it is ',pm$pm2_guaje_class$y$a[ind3],'. ',sep='')
}
if (dif > 0) {
msg= paste(msg,' On balance, ',pm$pm2_guaje_class$y$a[ind],' is more likely, because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
}
} else if (dif <= 0.2) {
msg= paste(msg,' The class is probably ',pm$pm2_guaje_class$y$a[ind],sep='')
if (pm$pm2_guaje_class$y$w[ind2] > 0.1) {
msg= paste(msg,'. There is also a small chance that it is ',pm$pm2_guaje_class$y$a[ind2],'. ',sep='')
if ( (length(aux) > 2) & (ind3 != ind2) & (pm$pm2_guaje_class$y$w[ind3] > 0.1) ) {
msg= paste(msg,' There is even a smaller chance that the class is ',pm$pm2_guaje_class$y$a[ind3],'. ',sep='')
}
msg= paste(msg,' On balance, ',pm$pm2_guaje_class$y$a[ind],' is more likely, because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
} else {
msg= paste(msg,', because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
}
} else {
msg= paste(msg,' The class is probably ',pm$pm2_guaje_class$y$a[ind],sep='')
if (pm$pm2_guaje_class$y$w[ind2] > 0.1) {
msg= paste(msg,'. There is also a small chance that it is ',pm$pm2_guaje_class$y$a[ind2],'. ',sep='')
if ( (length(aux) > 2) & (ind3 != ind2) & (pm$pm2_guaje_class$y$w[ind3] > 0.1) ) {
msg= paste(msg,' There is even a smaller chance that the class is ',pm$pm2_guaje_class$y$a[ind3],'. ',sep='')
}
msg= paste(msg,' On balance, ',pm$pm2_guaje_class$y$a[ind],' is more likely, because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
} else {
msg= paste(msg,', because ',pm_report(pm2_guaje_rules[[ind_rr]]),sep='')
}
}
msg= paste(msg,'.',sep='')
if (warn) {
warn1=FALSE
warn2=FALSE
warn3=FALSE
mCOLOR=max(pm$pm1_guaje_color$y$w)
if (mCOLOR >= 0.45 & mCOLOR <= 0.55) {
warn1= TRUE
auxCOLOR= pm$pm1_guaje_color$y$w
im1= which.max(auxCOLOR)
auxCOLOR[im1]= -1
im2= which.max(auxCOLOR)
warn1= TRUE
msg= paste(msg,' In addition, color takes a borderline value between ',pm$pm1_guaje_color$y$a[min(im1,im2)],' and ',pm$pm1_guaje_color$y$a[max(im1,im2)],'.',sep='')

}
mBITTERNESS=max(pm$pm1_guaje_bitterness$y$w)
if (mBITTERNESS >= 0.45 & mBITTERNESS <= 0.55) {
warn2= TRUE
auxBITTERNESS= pm$pm1_guaje_bitterness$y$w
im1= which.max(auxBITTERNESS)
auxBITTERNESS[im1]= -1
im2= which.max(auxBITTERNESS)
if (warn1) {
msg= paste(msg,' Also, ',sep='')
} else {
warn2= TRUE
msg= paste(msg,' In addition, ',sep='')
}
msg= paste(msg,' bitterness takes a borderline value between ',pm$pm1_guaje_bitterness$y$a[min(im1,im2)],' and ',pm$pm1_guaje_bitterness$y$a[max(im1,im2)],'.',sep='')

}
mSTRENGTH=max(pm$pm1_guaje_strength$y$w)
if (mSTRENGTH >= 0.45 & mSTRENGTH <= 0.55) {
warn3= TRUE
auxSTRENGTH= pm$pm1_guaje_strength$y$w
im1= which.max(auxSTRENGTH)
auxSTRENGTH[im1]= -1
im2= which.max(auxSTRENGTH)
if (warn2 | warn1) {
msg= paste(msg,' Also, ',sep='')
} else {
warn3= TRUE
msg= paste(msg,' In addition, ',sep='')
}
msg= paste(msg,' strength takes a borderline value between ',pm$pm1_guaje_strength$y$a[min(im1,im2)],' and ',pm$pm1_guaje_strength$y$a[max(im1,im2)],'.',sep='')

}

}
} else {
msg= 'There are no fired rules.'
}
properties$exp = msg

save(properties, file='properties.RData')
rmarkdown::render(paste(url_ldcp, file_rnw_name,'.Rmd',sep=''))
html_name = paste(url_results,file_rnw_name,'-',dnum,'.html',sep='')
file.rename(paste(url_ldcp, file_rnw_name,'.html',sep=''), html_name )
file.remove('properties.RData')
}
properties = NULL
my_reportGuaje <- report_template(properties, report_methodGuaje)
