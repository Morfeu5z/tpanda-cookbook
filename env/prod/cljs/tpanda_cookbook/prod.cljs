(ns tpanda-cookbook.prod
  (:require
    [tpanda-cookbook.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
