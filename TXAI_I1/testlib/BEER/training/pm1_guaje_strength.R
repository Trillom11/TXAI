cp_guaje_strength <- cp('cp_guaje_strength',c('session', 'standard', 'high', 'very high', '(session) or (standard)', '(high) or (very high)'))
g_guaje_strength <- function(u,y){
y$w <- degree_mf(fuzzy_partitions(
trapezoid_mf(0.039,0.039,0.039,0.058),
triangle_mf(0.039,0.058,0.078),
triangle_mf(0.058,0.078,0.097),
trapezoid_mf(0.078,0.097,0.136,0.136),
trapezoid_mf(0.039,0.039,0.058,0.078),
trapezoid_mf(0.058,0.078,0.136,0.136)),
u)
y
}
t_guaje_strength <- function(y){
description <- paste( 'The strength is ', y$a[which.max(y$w)], sep='')
description
}
pm1_guaje_strength <- pm(y=cp_guaje_strength, g=g_guaje_strength, t=t_guaje_strength)
