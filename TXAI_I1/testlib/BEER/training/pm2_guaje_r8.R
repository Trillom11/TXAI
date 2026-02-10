cp_guaje_r8 <- cp('cp_guaje_r8', c('Stout','Other'))
g_guaje_r8 <- function(u,y){
operator <- operator( min , max )
y$w <- infer_rules(fuzzy_rules(fuzzy_rule(0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0)), operator, list( u[[1]]$w, u[[2]]$w, u[[3]]$w ))
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
t_guaje_r8 <- function(y){
templates <- c('in accordance with rule 8,  class is stout in case that Color is black',' Color is not black')
return(templates[which.max(y$w)])
}
pm2_guaje_r8 <- pm(y=cp_guaje_r8, g=g_guaje_r8, t=t_guaje_r8)
