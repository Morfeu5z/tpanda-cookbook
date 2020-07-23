(ns tpanda-cookbook.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as dom]))

;; -------------------------

(def flextest (fn []
  [:div.fcontainer.frow.farround
   [:div [:p "Text1"]]
   [:div [:p "Text2"]]]))

                                      ;  {:on-click (fn [e] (set! (-> (first (.-children (-> js/document (.getElementById "app"))))) -innerHTML (flextest)))}
(def container (fn []
  [:div.fcontainer.frow.fmiddle {:id "main"}
   [:h1 
    ; {:on-click (r/render flextest (-> js/document (.getElementById "main")))}
    {:on-load (fn [e] (js/console.log (.-target e)))}
    "Hello world!"]]))

; (.addEventListener (-> js/document (.getElementById "app")) "click" (js/console.log "Btn click") false)

(defn body-space [] container)


(defn mount-root []
  (dom/render [body-space] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
