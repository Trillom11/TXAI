cp_guaje_r4 <- cp('cp_guaje_r4', c('Lager','Other'))
g_guaje_r4 <- function(u,y){
operator <- operator( min , max )
y$w <- infer_rules(fuzzy_rules(fuzzy_rule(0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0)), operator, list( u[[1]]$w, u[[2]]$w, u[[3]]$w ))
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
t_guaje_r4 <- function(y){
templates <- c('in accordance with rule 4,  class is lager in case that Color is straw and Bitterness is low and Strength is standard',' Color is not straw or Bitterness is not low or Strength is not standard')
return(templates[which.max(y$w)])
}
pm2_guaje_r4 <- pm(y=cp_guaje_r4, g=g_guaje_r4, t=t_guaje_r4)
