cp_guaje_r1 <- cp('cp_guaje_r1', c('Blanche','Other'))
g_guaje_r1 <- function(u,y){
operator <- operator( min , max )
y$w <- infer_rules(fuzzy_rules(fuzzy_rule(1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0)), operator, list( u[[1]]$w, u[[2]]$w, u[[3]]$w ))
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
t_guaje_r1 <- function(y){
templates <- c('in accordance with rule 1,  class is blanche in case that Color is pale and Bitterness is low',' Color is not pale or Bitterness is not low')
return(templates[which.max(y$w)])
}
pm2_guaje_r1 <- pm(y=cp_guaje_r1, g=g_guaje_r1, t=t_guaje_r1)
