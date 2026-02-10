cp_guaje_r3 <- cp('cp_guaje_r3', c('IPA','Other'))
g_guaje_r3 <- function(u,y){
operator <- operator( min , max )
y$w <- infer_rules(fuzzy_rules(fuzzy_rule(0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0)), operator, list( u[[1]]$w, u[[2]]$w, u[[3]]$w ))
y$w[1]= y$w[which.max(y$w)]
if(y$w[1] > 0.5) {
y$w[2]= 1- y$w[1]
} else {
y$w[2]= 0
}
y$r[1]= 0.9
y$r[2]= 1 - y$r[1]
y
}
t_guaje_r3 <- function(y){
templates <- c('in accordance with rule 3,  class is ipa in case that Color is (straw) or (amber) and Strength is high',' Color is not (straw) or (amber) or Strength is not high')
return(templates[which.max(y$w)])
}
pm2_guaje_r3 <- pm(y=cp_guaje_r3, g=g_guaje_r3, t=t_guaje_r3)
