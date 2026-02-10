pms_guaje_name= c('pm1_guaje_color','pm1_guaje_bitterness','pm1_guaje_strength','pm2_guaje_class','pm2_guaje_r1','pm2_guaje_r2','pm2_guaje_r3','pm2_guaje_r4','pm2_guaje_r5','pm2_guaje_r6','pm2_guaje_r7','pm2_guaje_r8')

for(i in 1:length(pms_guaje_name))
source(paste(url_glmp,pms_guaje_name[i],'.R',sep=''))

glmp_methodGuaje <- function(pm,input){
pm$pm1_guaje_color <- pm_infer(pm$pm1_guaje_color, input[1])
pm$pm1_guaje_bitterness <- pm_infer(pm$pm1_guaje_bitterness, input[2])
pm$pm1_guaje_strength <- pm_infer(pm$pm1_guaje_strength, input[3])
pm$pm2_guaje_r1 <- pm_infer(pm$pm2_guaje_r1, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r2 <- pm_infer(pm$pm2_guaje_r2, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r3 <- pm_infer(pm$pm2_guaje_r3, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r4 <- pm_infer(pm$pm2_guaje_r4, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r5 <- pm_infer(pm$pm2_guaje_r5, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r6 <- pm_infer(pm$pm2_guaje_r6, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r7 <- pm_infer(pm$pm2_guaje_r7, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_r8 <- pm_infer(pm$pm2_guaje_r8, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm$pm2_guaje_class <- pm_infer(pm$pm2_guaje_class, list(pm$pm1_guaje_color$y,pm$pm1_guaje_bitterness$y,pm$pm1_guaje_strength$y))
pm
}

pmGuaje <- list(
pm1_guaje_color = pm1_guaje_color,
pm1_guaje_bitterness = pm1_guaje_bitterness,
pm1_guaje_strength = pm1_guaje_strength,
pm2_guaje_r1 = pm2_guaje_r1,
pm2_guaje_r2 = pm2_guaje_r2,
pm2_guaje_r3 = pm2_guaje_r3,
pm2_guaje_r4 = pm2_guaje_r4,
pm2_guaje_r5 = pm2_guaje_r5,
pm2_guaje_r6 = pm2_guaje_r6,
pm2_guaje_r7 = pm2_guaje_r7,
pm2_guaje_r8 = pm2_guaje_r8,
pm2_guaje_class = pm2_guaje_class)

my_glmpGuaje <- glmp(pmGuaje,glmp_methodGuaje)
