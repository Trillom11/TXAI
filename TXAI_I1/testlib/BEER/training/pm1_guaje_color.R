cp_guaje_color <- cp('cp_guaje_color',c('pale', 'straw', 'amber', 'brown', 'black', '(straw) or (amber)', '(amber) or (brown)'))
g_guaje_color <- function(u,y){
y$w <- degree_mf(fuzzy_partitions(
trapezoid_mf(0.0,0.0,0.0,9.0),
triangle_mf(0.0,9.0,18.0),
triangle_mf(9.0,18.0,27.0),
triangle_mf(18.0,27.0,36.0),
trapezoid_mf(27.0,36.0,45.0,45.0),
trapezoid_mf(0.0,9.0,18.0,27.0),
trapezoid_mf(9.0,18.0,27.0,36.0)),
u)
y
}
t_guaje_color <- function(y){
description <- paste( 'The color is ', y$a[which.max(y$w)], sep='')
description
}
pm1_guaje_color <- pm(y=cp_guaje_color, g=g_guaje_color, t=t_guaje_color)
