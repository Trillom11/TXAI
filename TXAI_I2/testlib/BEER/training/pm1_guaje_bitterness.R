cp_guaje_bitterness <- cp('cp_guaje_bitterness',c('low', 'high'))
g_guaje_bitterness <- function(u,y){
y$w <- degree_mf(fuzzy_partitions(
trapezoid_mf(8.0,8.0,8.0,56.4),
trapezoid_mf(8.0,56.4,250.0,250.0)),
u)
y
}
t_guaje_bitterness <- function(y){
description <- paste( 'The bitterness is ', y$a[which.max(y$w)], sep='')
description
}
pm1_guaje_bitterness <- pm(y=cp_guaje_bitterness, g=g_guaje_bitterness, t=t_guaje_bitterness)
